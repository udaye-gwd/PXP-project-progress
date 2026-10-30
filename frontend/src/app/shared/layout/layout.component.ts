
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { AuthService } from '../../core/services/auth.service';
import { ToastComponent } from '../components/toast/toast.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CdkScrollable, ToastComponent],
  template: `
    <app-toast />

    <div class="relative flex h-screen overflow-hidden bg-[#080812] text-zinc-200">

      @if (sidebarOpen()) {
        <div
          class="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
          (click)="sidebarOpen.set(false)"
        ></div>
      }

      <aside
        class="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-violet-500/15 bg-[#0b0b18]/95 backdrop-blur-2xl transition-transform duration-300 lg:static lg:translate-x-0"
        [class.-translate-x-full]="!sidebarOpen()"
        [class.translate-x-0]="sidebarOpen()"
      >

        <div class="flex h-20 shrink-0 items-center justify-between border-b border-violet-500/15 px-6">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-600/30">
              <span class="text-lg font-black tracking-tight text-white">P</span>
            </div>
            <div>
              <h1 class="text-xl font-extrabold tracking-wider text-white">PXP</h1>
              <p class="text-[10px] font-medium tracking-[2px] text-violet-300">PROJECTXPROGRESS</p>
            </div>
          </div>

          <button
            (click)="sidebarOpen.set(false)"
            class="rounded-lg p-2 text-zinc-500 transition hover:bg-violet-500/10 hover:text-white lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="px-5 pb-2 pt-7">
          <p class="text-[10px] font-bold uppercase tracking-[2px] text-zinc-600">Workspace</p>
        </div>

        <nav class="flex-1 space-y-2 overflow-y-auto px-3 py-3">

          <a
            routerLink="/dashboard"
            routerLinkActive="!border-violet-400/40 !bg-gradient-to-r !from-violet-600/20 !to-blue-600/10 !text-white shadow-lg shadow-violet-950/20"
            (click)="sidebarOpen.set(false)"
            class="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
            </svg>
            Dashboard
          </a>

          <a
            routerLink="/projects"
            routerLinkActive="!border-violet-400/40 !bg-gradient-to-r !from-violet-600/20 !to-blue-600/10 !text-white shadow-lg shadow-violet-950/20"
            (click)="sidebarOpen.set(false)"
            class="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
            </svg>
            Projects
          </a>

          <a
            routerLink="/tasks"
            routerLinkActive="!border-violet-400/40 !bg-gradient-to-r !from-violet-600/20 !to-blue-600/10 !text-white shadow-lg shadow-violet-950/20"
            (click)="sidebarOpen.set(false)"
            class="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Tasks
          </a>

        </nav>

        <div class="border-t border-violet-500/15 p-4">
          <div class="flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/5 p-3">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-sm font-bold text-violet-200 ring-1 ring-violet-400/30">
              {{ userInitials() }}
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-white">
                {{ authService.currentUser()?.name ?? 'User' }}
              </p>
              <p class="truncate text-xs text-zinc-500">
                {{ authService.currentUser()?.email ?? '' }}
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div class="flex min-w-0 flex-1 flex-col overflow-hidden">

        <header class="flex h-20 shrink-0 items-center justify-between border-b border-violet-500/15 bg-[#0b0b18]/70 px-4 backdrop-blur-xl lg:px-8">

          <button
            (click)="sidebarOpen.set(true)"
            class="rounded-xl border border-violet-500/20 bg-violet-500/5 p-2.5 text-zinc-300 transition hover:bg-violet-500/15 hover:text-white lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>

          <div class="hidden sm:block">
            <p class="text-xs font-medium uppercase tracking-[2px] text-zinc-500">Project workspace</p>
            <p class="mt-1 text-sm font-semibold text-zinc-200">Manage. Collaborate. Progress.</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="hidden text-sm font-medium text-zinc-400 sm:block">
              {{ authService.currentUser()?.name ?? '' }}
            </span>

            <button
              (click)="authService.logout()"
              class="flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
              </svg>
              Logout
            </button>
          </div>
        </header>

        <main cdkScrollable class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  readonly sidebarOpen = signal(false);

  constructor(public authService: AuthService) {}

  @HostListener('document:mousemove', ['$event'])
  onPointerMove(event: MouseEvent): void {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }

  userInitials(): string {
    const name = this.authService.currentUser()?.name;
    if (!name) return '?';

    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
