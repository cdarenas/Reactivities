export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
}

export interface IActivityFormValues extends Partial<IActivity> {

}

export class ActivityFormValues implements IActivityFormValues {
    id: string = '';
    title: string = '';
    category: string = '';
    description: string = '';
    date: Date = new Date();
    city: string = '';
    venue: string = '';

    constructor(init?: IActivityFormValues) {
        if (init && init.date) {

        }
        Object.assign(this, init);
    }
}