import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div class="notification is-danger container m-b-4 m-t-4">
          <h2 className="is-size-5 m-b-4">
            Актуальные курсы валют на данный момент не доступны. Ведутся
            технические работы.
          </h2>
          <p>
            Мы уведомлены об ошибке и уже работаем над её исправлением.
            Попробуйте обновить страницу или зайти немного позже. Благодарим за
            понимание!
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
