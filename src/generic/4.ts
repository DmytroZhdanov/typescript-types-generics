/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageInterface {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageInterface> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
