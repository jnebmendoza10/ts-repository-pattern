export class NotContentError extends Error{
    private static readonly message = "No content";

    constructor(){
        super(NotContentError.message);
        this.stack = new Error().stack;
    }
}