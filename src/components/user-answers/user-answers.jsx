import './user-answers.scss'

const UserAnswers = () => {
  return (
    <div className='user__answers'>
      <p className="user__answers-title">Ответы на вопросы</p>
      <div className="user__answers-item">
        <p className="user__answers-item--question">
          Чего вы ожидаете от партнера ?
        </p>
        <p className="user__answers-item--answers">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt itaque delectus!
        </p>
      </div>
      <div className="user__answers-item">
        <p className="user__answers-item--question">
          Чего вы ожидаете от партнера ?
        </p>
        <p className="user__answers-item--answers">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt itaque delectus!
        </p>
      </div>
    </div>
  )
}

export default UserAnswers