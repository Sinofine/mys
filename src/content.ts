const source = "https://api.github.com/repos/luxunaccess/Novels/contents";
export default fetch(source)
    .then(_ => _.json())
    .then((_: {
        name: string;
        download_url: string;
    }[]) => (_).map(val => ({ name: val.name, data: () => fetch(val.download_url).then(_=>_.json()) })));