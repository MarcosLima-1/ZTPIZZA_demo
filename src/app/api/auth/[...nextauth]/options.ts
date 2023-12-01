import type { AuthOptions, Account, User as AuthUser } from 'next-auth';
import mongoose from 'mongoose';
import { User } from '@/app/api/models/User';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: AuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),

		CredentialsProvider({
			name: 'Credentials',
			id: 'Credentials',

			credentials: {
				email: { label: 'email', type: 'email', placeholder: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials: any) {
				const { email, password } = credentials;

				mongoose.connect(process.env.MONGO_URL);

				const user = await User.findOne({ email });

				try {
					const passok = user && bcrypt.compare(password, user.password);

					if (passok) {
						return user;
					}
				} catch (error) {
					console.log('erro de verificação');

					return new NextResponse('Ocorreu um erro', {
						status: 400,
					});
				}
				return null;
			},
		}),
	],
	callbacks: {
		async signIn({ user, account }: { user: AuthUser; account: Account }) {
			if (account?.provider == 'credentials') {
				return true;
			}
			if (account?.provider == 'github') {
				mongoose.connect(process.env.MONGO_URL);
				try {
					const existingUser = await User.findOne({ githubId: user.id });
					if (!existingUser) {
						const newUser = new User({
							githubId: user.id
						});
						await newUser.save();
						return true;
					}
				} catch (error) {
					console.log('erro saving user', error);
					return false;
				}
			}
			return true;
		},
	},
	pages: {
		signIn: '/Login',
	},
};
