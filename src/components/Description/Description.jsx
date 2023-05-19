import './Description.css'

import logo from '../../assets/images/logo.jpg'

export const Description = () => {
  return (
    <div>
      <img srcSet={logo} alt="logo" className='img-logo'/>
      <div className="description">
      
      
      <h1 className='description-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates!</h1>
      <div className="description-paragraphs">
        <p className="paragraphs-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab commodi pariatur assumenda distinctio, earum ex optio sint asperiores iste est eaque ratione consequatur vero doloribus, sequi illo inventore aut cupiditate suscipit, facere rem. Vel alias cumque quis nesciunt dolorum magni voluptatem, omnis eum earum natus expedita ducimus dolores incidunt pariatur.</p>
        <p className="paragraphs-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste optio adipisci perferendis assumenda, laboriosam, a cumque iusto in explicabo necessitatibus quisquam nam magni mollitia dolorem quos tempore commodi eaque sequi ratione earum accusantium blanditiis. Nostrum porro aspernatur itaque animi nulla iure ipsa voluptatibus molestiae, omnis ipsum vitae velit at soluta.</p>
      </div>
    </div>
    </div>
    
  )
}