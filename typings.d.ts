declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module '*.scss' {
	const content: { [key: string]: string };
	export default content;
}

declare const DOMAIN: string;
declare const LOGINPATH: string;
declare const DOMAIN_NAME: string;
declare const TYPE: string;
