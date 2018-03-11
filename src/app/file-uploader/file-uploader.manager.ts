import { Inject, Injectable, Optional } from '@angular/core';
import { FireUploaderConfig, UPLOADER_CONFIG } from './upload-config.model';

const defaultConfig: FireUploaderConfig = {
  dropZone: true,
  paramName: null,
  uniqueName: true,
  placeholder: 'Drop files here or click to select',
  multiple: true,
  accept: null,
  parallelUploads: 1,
  maxFiles: 20,
  autoStart: false,
  thumbWidth: 100,
  thumbHeight: 100,
  resizeMethod: 'crop'
};

@Injectable()
export class FireUploaderManager {

  /** Global config */
  config: FireUploaderConfig;

  constructor(@Optional() @Inject(UPLOADER_CONFIG) config: FireUploaderConfig) {
    this.config = {...defaultConfig, ...config};
  }

}