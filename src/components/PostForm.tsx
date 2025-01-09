export default function PostForm() {
  return (
    <form action="/post" method="POST" className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="form__block">
        <label htmlFor="title">요약</label>
        <input type="text" name="summary" id="summary" />
      </div>
      <div className="form__block">
        <label htmlFor="title">내용</label>
        <textarea name="content" id="content" required />
      </div>
      <div className="form__block">
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  );
}
