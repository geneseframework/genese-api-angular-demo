import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorComponent extends MatPaginatorIntl {
    translate: TranslateService;
    itemsPerPageLabel = '';
    nextPageLabel = '';
    previousPageLabel = '';

    /**
     * Translate the range label of the paginator
     * @param page
     * @param pageSize
     * @param length
     */
    // TODO : finish implementation
    getRangeLabel = function(page, pageSize, length) {
        // if (length === 0 || pageSize === 0) {
        //     return `1 of ${length}`;
        // }
        // length = Math.max(length, 0);
        // const startIndex = page * pageSize;
        // // If the start index exceeds the list length, do not try and fix the end index to the end.
        // const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        // return `${startIndex + 1} - ${endIndex} of ${length}`;
        return '';
    };


    /**
     * Get the translation for the paginator
     * @param translate
     */
    getPaginatorIntl(translate: TranslateService) {
        this.translate = translate;
        this.translateLabels();

        this.translate.onLangChange.subscribe(() => {
            this.translateLabels();
        });
    }


    /**
     * Translates the labels
     */
    translateLabels() {
        this.itemsPerPageLabel = 'Items per page';
        this.nextPageLabel = 'Next page';
        this.previousPageLabel = 'Previous page';
        this.firstPageLabel = 'First page';
        this.lastPageLabel = 'Last page';
        this.getRangeLabel = this.getRangeLabel.bind(this);
        this.changes.next();
    }
}
