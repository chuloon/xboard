export class Card {
    id: number;
    title: string;
    description: string
    points: number;
    status: string;
    selector: string;

    constructor(
        id: number,
        title: string,
        description: string,
        points: number,
        status: string,
        selector: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.points = points;
        this.status = status;
        this.selector = selector;
    }
}