import { css } from '@emotion/css'

const Error = () => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
  >
    <h1>404</h1>
    <h2>Вы ввели неверный адрес!</h2>
  </div>
)

export default Error
