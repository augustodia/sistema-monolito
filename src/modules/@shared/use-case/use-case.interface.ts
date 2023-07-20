export default interface UseCaseInterface<I = any, O = void> {
    execute(input?: I): Promise<O>;
}