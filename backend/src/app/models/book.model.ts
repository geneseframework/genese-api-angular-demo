export class Book {

    public id: number;
    public author?: string;
    public title?: string;
    public booleans?: boolean[];
    public categories?: string[];
    public codeArrayOfArraysOfStrings?: string[][];
    public codeArrayOfArraysOfObjects?: {codeNumber: number, codeString: string}[][];
    public codeNumbers?: number[];
    public description?: string;
    public editions?: {
        name?: string,
        year?: string,
        gnTranslate ?: {
            [key: string]: {
                country?: string,
                incorrect?: string
            }
        }
    }[];
    public editor?: {
        name?: string,
        place?: {
            city?: string,
            country?: string,
            street?: string
        }
    };
    public gnTranslate?: {
        [key: string]: {
            type?: string,
            incorrect?: string
        }
    };
    public irrelevantProperty?: string;
    public isAvailable?: boolean;
    public librariesClassification?: {
        [key: string]: string
    };
    public librariesRate?: {
        [key: string]: number
    };
    public year ?= '';

    constructor() {}

}


export class LightBookEditor {
    name ?= 'editor.name';
    city ?= 'editor.place.city';
    country ?= 'editor.place.country';
    title ?= 'title';
}
