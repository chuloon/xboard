export class Card {
    id: number;
    title: string;
    description: string
    points: number;
    status: string

    constructor(
        id: number,
        title: string,
        description: string,
        points: number,
        status: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.points = points;
        this.status = status;
    }
}