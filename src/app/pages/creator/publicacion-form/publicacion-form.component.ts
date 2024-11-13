import { ChangeDetectorRef, Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

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

import 'ckeditor5/ckeditor5.css';
import translations from 'ckeditor5/translations/es.js';


@Component({
  selector: 'app-publicacion-form',
  standalone: true,
  imports: [RouterLink, CKEditorModule, CommonModule],
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PublicacionFormComponent  {
	@ViewChild('editorMenuBarElement') private editorMenuBar!: ElementRef<HTMLDivElement>;

	constructor(private changeDetector: ChangeDetectorRef) {}

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
			balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
			blockToolbar: [
				'fontSize',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'|',
				'link',
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
			placeholder: 'Type or paste your content here!',
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
}