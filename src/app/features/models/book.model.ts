// import { GeneseModelEnvironment } from 'genese-angular';
// import { Category } from '../enums/category';
// import { Author } from '../../../../backend/src/app/models/author.model';
//
//
// export class Book {
//
//     @GnRename('isAvailable')
//     public available ?= false;
//
//     @GnRename('title')
//     public title ?= '';
//
//     public id ?= '';
//     public author ?= new Author();
//
//     public categories?: Category[] = [Category.none];
//     public codeArrayOfArraysOfStrings?: string[][] = [['']];
//     public codeArrayOfArraysOfObjects?: {codeNumber: number, codeString: string}[][] = [[{codeNumber: 0, codeString: ''}]];
//     public codeNumbers?: number[] = [0];
//     public description ? = '';
//     public editions?: {
//         name?: string,
//         year?: string,
//         gnTranslate ?: {
//             [key: string]: {
//                 country: string
//             }
//         }
//     }[] = [{
//         name: '',
//         year: '',
//         gnTranslate: {
//             gnIndexableType: {
//                 country: ''
//             }
//         }
//     }];
//     public editor?: {
//         name?: string,
//         place?: {
//             city?: string,
//             country?: string
//         }
//     } = {
//         name: '',
//         place: {
//             city: '',
//             country: ''
//         }
//     };
//     public librariesClassification?: {
//         [key: string]: string
//     } = {
//         gnIndexableType: ''
//     };
//     public librariesRate?: {
//         [key: string]: number
//     } = {
//         gnIndexableType: 0
//     };
//     public year ?= '';
//     public gnTranslate?: {
//         [key: string]: {
//             type: string
//         }
//     } = {
//         gnIndexableType: {
//             type: ''
//         }
//     };
//     public genese?: GeneseModelEnvironment = {
//         path: '/books'
//     };
// }
//
// export class LightBookEditor {
//     name ?= 'editor.name';
//     // city ?= 'editor.place.city';
//     country ?= 'editor.place.country';
//     @GnRename('title')
//     title ?= 'title';
//     // myEditor ?= 'editor';
//     editions ?= 'editions';
// }
//
// export function GnRename(backendProperty: string) {
//     // tslint:disable-next-line:only-arrow-functions
//     return function(target: any, propertyKey: string) {
//         // console.log('%c GnRename target ', 'font-weight: bold; color: fuchsia;', target);
//         if (!target.constructor.gnRename) {
//             target.constructor.gnRename = {};
//         }
//         target.constructor.gnRename[propertyKey] = backendProperty;
//     };
// }
