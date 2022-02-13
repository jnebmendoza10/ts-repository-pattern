export class NotFoundError extends Error{
    private static readonly message = "Item not found";

    constructor(){
        super(NotFoundError.message);
        this.stack = new Error().stack;
    }
}