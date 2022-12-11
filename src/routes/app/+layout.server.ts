import { appwriteCookie, AppwriteService } from '$lib/appwrite';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const authCookie = cookies.get(appwriteCookie);

	if (!authCookie) {
		throw redirect(307, '/auth');
	}

	AppwriteService.setSSRAuth(authCookie);

	try {
		const account = AppwriteService.getAccount();

		return {
			account
		};
	} catch (err: any) {
		throw redirect(307, '/auth');
	}
};

