<script lang="ts">
	import { page } from '$app/stores';
	import { appwriteEndpoint } from '$lib/appwrite';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let menuOpened = false;
</script>

<div class="block md:flex">
	<div class="w-full block md:hidden bg-white p-4 shadow-sm flex items-center justify-between">
		<h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Almost Linktree</h2>

		<button
			on:click={() => (menuOpened = !menuOpened)}
			class="bg-gray-100 rounded-md p-2 text-black"
		>
			{#if menuOpened}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</button>
	</div>
	<div
		class={`${
			menuOpened ? 'block !w-full' : 'hidden'
		} md:flex flex-col w-64 h-screen p-4 md:py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 flex-shrink-0`}
	>
		<h2 class="hidden md:block text-3xl font-semibold text-gray-800 dark:text-white">
			Almost Linktree
		</h2>

		<div class="flex flex-col justify-between flex-1 md:mt-6">
			<nav>
				<a
					class={`${
						$page.url.pathname.startsWith('/app/links') ? 'bg-gray-100 dark:bg-gray-800' : ''
					} flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
					href="/app/links"
				>
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<span class="mx-4 font-medium">Links</span>
				</a>

				<a
					class={`${
						$page.url.pathname.startsWith('/app/settings') ? 'bg-gray-100 dark:bg-gray-800' : ''
					} flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
					href="/app/settings"
				>
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<span class="mx-4 font-medium">Settings</span>
				</a>

				{#if data.profile && data.profile.slug}
					<hr class="my-6 border-gray-200 dark:border-gray-600" />

					<a
						class={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
						href={`/u/${data.profile.slug}`}
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-5 h-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
							/>
						</svg>

						<span class="mx-4 font-medium">Visit My Page</span>
					</a>
				{/if}
			</nav>

			<form method="POST" action="/app?/logout" class="mt-4 flex items-center px-4 -mx-2">
				<img
					class="object-cover mx-2 rounded-full h-9 w-9"
					src={`${appwriteEndpoint}/avatars/initials?name=${data.account.email}`}
					alt="avatar"
				/>
				<button class="hover:bg-red-100 w-full p-2 rounded-md text-center mx-2" type="submit"
					><span class="font-medium text-red-500 dark:text-red-200">Logout</span></button
				>
			</form>
		</div>
	</div>

	<div class="p-4 w-full">
		<slot />

		<div class="max-w-sm mx-auto mt-6 border-t-2 border-gray-200 pt-4">
			<p class="text-gray-400 text-sm text-center">
				Made with 🖤 and <a
					class="text-black"
					href="https://appwrite.io/"
					rel="noreferrer"
					target="_blank">Appwrite</a
				>. Contact:
				<a class="text-black" href="mailto:contact@almostapps.eu">contact@almostapps.eu</a>
			</p>
		</div>
	</div>
</div>
