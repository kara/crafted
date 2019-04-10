import {Observable, of} from 'rxjs';

export interface DataSourceMetadata<T> {
  id: string;
  label: string;
  type: string;
  accessor: (item: T) => any;
}

export class DataSource<T = any> {
  data: Observable<T[]>;

  constructor(
      private _data: Observable<T[]>|T[],
      public metadata: Map<string, DataSourceMetadata<T>> = new Map()) {
    if (_data instanceof Observable) {
      this.data = this._data as Observable<T[]>;
    } else if (Array.isArray(_data)) {
      this.data = of(_data);
    }
  }

  getMetadataListForType(type: string): DataSourceMetadata<T>[] {
    const metadataListForType: DataSourceMetadata<T>[] = [];
    this.metadata.forEach(metadata => {
      if (metadata.type === type) {
        metadataListForType.push(metadata);
      }
    });
    return metadataListForType;
  }

  getMetadataMapForType(type: string): Map<string, DataSourceMetadata<T>> {
    const metadataMapForType = new Map<string, DataSourceMetadata<T>>();
    this.getMetadataListForType(type).forEach(metadata => {
      metadataMapForType.set(metadata.id, metadata);
    });
    return metadataMapForType;
  }
}
