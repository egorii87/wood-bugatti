import './FeedbackForm.css'

export const FeedbackForm = () => {

  return (
    <div className="feedback">
      <h1>Свяжитесь с нами для оформления заказа!</h1>
      <div className="contact-form">
        <form action="обработчик.php" method="post">
            <div className='label-text'>Телефон</div>
            <input type="text" name="phone" placeholder="+375 (99) 999-99-99" required/>
            <div className='label-text'>Имя</div>
            <input type="text" name="name" placeholder="Александр" required/>
            <div className='label-text'>Дополнительная информация</div>
            <textarea name="additional-info" placeholder="Введите наименование продукции, которая Вас интересует"></textarea>
            <div className="button-item"><button type="submit">Отправить</button></div>
        </form>
      </div>
        
    </div>
  )
}