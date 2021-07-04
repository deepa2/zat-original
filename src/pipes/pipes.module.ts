import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SanitizeHtmlPipe } from './sanitize-html/sanitize-html';
import { ToogleLessMorePipe } from './toogle-less-more/toogle-less-more';
import { SortJobsPipe } from './sort-jobs/sort-jobs';
import { SafeVideoPipe } from './safe-video/safe-video';
import { ReplaceUnderscorePipe } from './replaceUnderscorePipe/replaceUnderscorePipe';
import { CotravellerPipe } from '../pipes/cotraveller/cotraveller.pipe';
import { SortPipe } from "../pipes/sort";

@NgModule({
    declarations: [SearchPipe,
        SanitizeHtmlPipe,
        SafeVideoPipe,
        ToogleLessMorePipe,
        SortJobsPipe,
        ReplaceUnderscorePipe,
        CotravellerPipe,
        SortPipe
    ],
    imports: [],
    exports: [SearchPipe,
        SanitizeHtmlPipe,
        SafeVideoPipe,
        ToogleLessMorePipe,
        SortJobsPipe,
        ReplaceUnderscorePipe,
        CotravellerPipe,
        SortPipe
    ]
})
export class PipesModule { }
