import { Routes } from '@angular/router';
import { roleGuard } from '../../auth/guards/role.guard';
import { AdminComponent } from '../components/admin/admin.component';
import { EditArticleComponent } from '../components/edit-article/edit-article.component';
import { CreateArticleComponent } from '../components/create-article/create-article.component';
import { writerGuard } from '../../auth/guards/writer.guard';
import { editorGuard } from '../../auth/guards/editor.guard';


export const ADMIN_routes: Routes = [
    {
        path: 'writer', canActivate: [writerGuard], component: AdminComponent
    },
    {
        path: 'editor', canActivate: [editorGuard], component: AdminComponent
    },
    { path: 'writer/edit-article', canActivate: [writerGuard], component: EditArticleComponent },
    { path: 'editor/edit-article', canActivate: [editorGuard], component: EditArticleComponent },
    { path: 'writer/create-article', canActivate: [writerGuard], component: CreateArticleComponent }
];
