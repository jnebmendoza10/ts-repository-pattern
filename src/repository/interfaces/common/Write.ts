export interface Write<T> {
    create (item: T) : Promise<void>;
    update (_id: string, item: T): Promise<void>;
    delete (_id: string): Promise<void>;
}