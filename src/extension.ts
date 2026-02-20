// ============================================================
// src/extension.ts
// Extension entry point — activates commands, sidebar, and watchers.
// ============================================================

import * as vscode from 'vscode';
import { simulateTransaction } from './commands/simulateTransaction';
import { deployContract } from './commands/deployContract';
import { buildContract } from './commands/buildContract';
import { registerGroupCommands } from './commands/groupCommands';
import { manageCliConfiguration } from './commands/manageCliConfiguration';
import { registerSyncCommands } from './commands/syncCommands';
import { SidebarViewProvider } from './ui/sidebarView';
import { ContractGroupService } from './services/contractGroupService';
import { ContractVersionTracker } from './services/contractVersionTracker';
import { WorkspaceStateSyncService } from './services/workspaceStateSyncService';
import { SidebarAutoRefreshService } from './services/sidebarAutoRefreshService';
import { SyncStatusProvider } from './ui/syncStatusProvider';

let sidebarProvider: SidebarViewProvider | undefined;
let groupService: ContractGroupService | undefined;
let versionTracker: ContractVersionTracker | undefined;
let syncService: WorkspaceStateSyncService | undefined;
let syncStatusProvider: SyncStatusProvider | undefined;
let autoRefreshService: SidebarAutoRefreshService | undefined;

export function activate(context: vscode.ExtensionContext) {
    const outputChannel = vscode.window.createOutputChannel('Stellar Suite');
    outputChannel.appendLine('[Extension] Activating Stellar Suite extension...');

    try {
        groupService = new ContractGroupService(context);
        groupService.loadGroups().then(() => {
            outputChannel.appendLine('[Extension] Contract group service initialized');
        });
        registerGroupCommands(context, groupService);

        versionTracker = new ContractVersionTracker(context, outputChannel);

        syncService = new WorkspaceStateSyncService(context);
        syncStatusProvider = new SyncStatusProvider(syncService);

        sidebarProvider = new SidebarViewProvider(context.extensionUri, context);
        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(
                SidebarViewProvider.viewType,
                sidebarProvider
            )
        );

        const simulateCommand = vscode.commands.registerCommand(
            'stellarSuite.simulateTransaction',
            () => simulateTransaction(context, sidebarProvider)
        );

        const deployCommand = vscode.commands.registerCommand(
            'stellarSuite.deployContract',
            () => deployContract(context, sidebarProvider)
        );

        const buildCommand = vscode.commands.registerCommand(
            'stellarSuite.buildContract',
            () => buildContract(context, sidebarProvider)
        );

        const configureCliCommand = vscode.commands.registerCommand(
            'stellarSuite.configureCli',
            () => manageCliConfiguration(context)
        );

        autoRefreshService = new SidebarAutoRefreshService(sidebarProvider, outputChannel);

        const refreshCommand = vscode.commands.registerCommand(
            'stellarSuite.refreshContracts',
            () => {
                if (autoRefreshService) {
                    autoRefreshService.triggerManualRefresh();
                    return;
                }
                sidebarProvider?.refresh({ source: 'manual' });
            }
        );

        const deployFromSidebarCommand = vscode.commands.registerCommand(
            'stellarSuite.deployFromSidebar',
            () => deployContract(context, sidebarProvider)
        );

        const simulateFromSidebarCommand = vscode.commands.registerCommand(
            'stellarSuite.simulateFromSidebar',
            () => simulateTransaction(context, sidebarProvider)
        );

        const copyContractIdCommand = vscode.commands.registerCommand(
            'stellarSuite.copyContractId',
            async () => {
                const id = await vscode.window.showInputBox({
                    title: 'Copy Contract ID',
                    prompt: 'Enter the contract ID to copy to clipboard',
                });
                if (id) {
                    await vscode.env.clipboard.writeText(id);
                    vscode.window.showInformationMessage('Contract ID copied to clipboard.');
                }
            }
        );

        const showVersionMismatchesCommand = vscode.commands.registerCommand(
            'stellarSuite.showVersionMismatches',
            async () => {
                if (!versionTracker) { return; }
                const mismatches = versionTracker.getMismatches();
                if (!mismatches.length) {
                    vscode.window.showInformationMessage('Stellar Suite: No version mismatches detected.');
                    return;
                }
                await versionTracker.notifyMismatches();
            }
        );

        if (syncService) {
            registerSyncCommands(context, syncService);
        }

        context.subscriptions.push(
            simulateCommand,
            deployCommand,
            buildCommand,
            configureCliCommand,
            refreshCommand,
            deployFromSidebarCommand,
            simulateFromSidebarCommand,
            copyContractIdCommand,
            showVersionMismatchesCommand,
            autoRefreshService,
            syncStatusProvider || { dispose: () => {} },
            outputChannel
        );

        outputChannel.appendLine('[Extension] Extension activation complete');

    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        outputChannel.appendLine(`[Extension] ERROR during activation: ${errorMsg}`);
        vscode.window.showErrorMessage(`Stellar Suite activation failed: ${errorMsg}`);
    }
}

export function deactivate() {
    autoRefreshService?.dispose();
    syncStatusProvider?.dispose();
}
