function useIsMobile(state: any, ifState: any) {
    return (state ? ifState : '');
}

export default useIsMobile;