import { ChangeDetectorRef, Component, ViewEncapsulation, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
  } from '@angular/forms';
import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	Title,
	TodoList,
	Underline,
	Undo,
	type EditorConfig
} from 'ckeditor5';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';  // Import the CKEditorComponent
import 'ckeditor5/ckeditor5.css';
import translations from 'ckeditor5/translations/es.js';
import { Publicacion } from '../../../shared/models/publicacion.model';
import { CreacionPublicacionService } from '../../../core/services/creacion-publicacion.service';


@Component({
  selector: 'app-publicacion-form',
  standalone: true,
  imports: [RouterLink, CKEditorModule, CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatCardModule, MatSnackBarModule],
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PublicacionFormComponent  {

	publicacionForm: FormGroup;
	private fb = inject(FormBuilder);
	private snackBar = inject(MatSnackBar);
	private router = inject(Router);
	private creacionPublicacionService = inject(CreacionPublicacionService);

	constructor(private changeDetector: ChangeDetectorRef){
		this.publicacionForm = this.fb.group({
			titulo: ['', [Validators.required, Validators.pattern('[a-zA-Z +]*')]],
			contenido: ['', [Validators.required, Validators.minLength(26)]],
			resumen: ['', [Validators.required, Validators.minLength(15), Validators.pattern('[a-zA-Z +]*')]],
			imagen: ['',[Validators.required]],

		})
	}
	
	controlHasError(control:string, error:string){
		return this.publicacionForm.controls[control].hasError(error);
	}
	
	showSnackBar(message:string) {
		this.snackBar.open(message, 'Se ha hecho público su contenido.', {
		  duration:3000,
		  horizontalPosition: 'center',
		  verticalPosition: 'bottom',
		});
	  }
	onSubmit() {
		if (this.publicacionForm.valid) {
			const credentials = this.publicacionForm.value;
			const publicacion: Publicacion = {
				...this.publicacionForm.value,
			}


			console.log('Credenciales:',credentials);
			this.creacionPublicacionService.addPublicacion(publicacion);
			this.showSnackBar('Publicación Exitosa');

			this.router.navigate(['creator/list-publicaciones']);
		}
	}
//#region  Editor de Texto bonito
	@ViewChild('editorMenuBarElement') private editorMenuBar!: ElementRef<HTMLDivElement>;
	@ViewChild(CKEditorComponent) editorComponent!: CKEditorComponent; // Add this line to get a reference to the CKEditor



	public isLayoutReady = false;
	public Editor = ClassicEditor;
	public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
	public ngAfterViewInit(): void {
		this.config = {
			toolbar: {
				items: [
					'undo',
					'redo',
					'|',
					'sourceEditing',
					'|',
					'heading',
					'style',
					'|',
					'fontSize',
					'fontFamily',
					'fontColor',
					'fontBackgroundColor',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'link',
					'insertImageViaUrl',
					'MediaEmbed',
					'insertTable',
					'highlight',
					'blockQuote',
					'|',
					'alignment',
					'|',
					'bulletedList',
					'numberedList',
					'todoList',
					'outdent',
					'indent'
				],
				shouldNotGroupWhenFull: true
			},
			plugins: [
				AccessibilityHelp,
				Alignment,
				Autoformat,
				AutoImage,
				AutoLink,
				Autosave,
				BalloonToolbar,
				BlockQuote,
				BlockToolbar,
				Bold,
				Code,
				Essentials,
				FindAndReplace,
				FontBackgroundColor,
				FontColor,
				FontFamily,
				FontSize,
				FullPage,
				GeneralHtmlSupport,
				Heading,
				Highlight,
				HorizontalLine,
				HtmlEmbed,
				ImageBlock,
				ImageCaption,
				ImageInline,
				ImageInsertViaUrl,
				ImageResize,
				ImageStyle,
				ImageTextAlternative,
				ImageToolbar,
				Indent,
				IndentBlock,
				Italic,
				Link,
				List,
				ListProperties,
				Markdown,
				MediaEmbed,
				Paragraph,
				PasteFromMarkdownExperimental,
				PasteFromOffice,
				RemoveFormat,
				SelectAll,
				SourceEditing,
				SpecialCharacters,
				SpecialCharactersArrows,
				SpecialCharactersCurrency,
				SpecialCharactersEssentials,
				SpecialCharactersLatin,
				SpecialCharactersMathematical,
				SpecialCharactersText,
				Strikethrough,
				Style,
				Subscript,
				Superscript,
				Table,
				TableCaption,
				TableCellProperties,
				TableColumnResize,
				TableProperties,
				TableToolbar,
				TextPartLanguage,
				TextTransformation,
				Title,
				TodoList,
				Underline,
				Undo
			],
			balloonToolbar: ['bold', 'italic', '|', 'link','mediaEmbed', '|', 'bulletedList', 'numberedList'],
			blockToolbar: [
				'fontSize',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'|',
				'link',
				'mediaEmbed',
				'insertTable',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent'
			],
			fontFamily: {
				supportAllValues: true
			},
			fontSize: {
				options: [10, 12, 14, 'default', 18, 20, 22],
				supportAllValues: true
			},
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			htmlSupport: {
				allow: [
					{
						name: /^.*$/,
						styles: true,
						attributes: true,
						classes: true
					}
				]
			},
			image: {
				toolbar: [
					'toggleImageCaption',
					'imageTextAlternative',
					'|',
					'imageStyle:inline',
					'imageStyle:wrapText',
					'imageStyle:breakText',
					'|',
					'resizeImage'
				]
			},
			initialData:
				'<h2>Comienza Tu Publicación Aquí!</h2>\n<p>\n Aquí podrás subir tus tutoriales, videos, e imágenes de la manera que tú quieras!',
			language: 'es',
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			list: {
				properties: {
					styles: true,
					startIndex: true,
					reversed: true
				}
			},
			menuBar: {
				isVisible: true
			},
			placeholder: 'Escribe o pega tu contenido aquí!',
			style: {
				definitions: [
					{
						name: 'Article category',
						element: 'h3',
						classes: ['category']
					},
					{
						name: 'Title',
						element: 'h2',
						classes: ['document-title']
					},
					{
						name: 'Subtitle',
						element: 'h3',
						classes: ['document-subtitle']
					},
					{
						name: 'Info box',
						element: 'p',
						classes: ['info-box']
					},
					{
						name: 'Side quote',
						element: 'blockquote',
						classes: ['side-quote']
					},
					{
						name: 'Marker',
						element: 'span',
						classes: ['marker']
					},
					{
						name: 'Spoiler',
						element: 'span',
						classes: ['spoiler']
					},
					{
						name: 'Code (dark)',
						element: 'pre',
						classes: ['fancy-code', 'fancy-code-dark']
					},
					{
						name: 'Code (bright)',
						element: 'pre',
						classes: ['fancy-code', 'fancy-code-bright']
					}
				]
			},
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			},
			translations: [translations]
		};

			  
		this.isLayoutReady = true;
		this.changeDetector.detectChanges();

	}



//#endregion

}