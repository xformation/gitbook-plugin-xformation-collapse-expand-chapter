declare namespace GitBook{
    interface Page{
        type: string
        path: string
        rawpath: string
        title: string
        content: string
    }
    interface GitBook{
        events
        keyboard
        navigation
        page
        sidebar
        state
        storage
        toolbar
    }
}

declare function require(modules: string[], module: (gitbook: GitBook.GitBook, $)=> void)