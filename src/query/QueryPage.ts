
export class QueryPage {
    public readonly matcher: boolean = false;

    public readonly page: number = 0;

    public readonly limit: number = 10;

    public buildSearch(): any {
        return {};
    }
    public findRecord(): any {
        return {};
    }
    public findRecordAndCount(): any {
        return {};
    }
    public querySql(): any {
        return '';
    }
    public querySqlParameter(): any {
        return [];
    }
}
