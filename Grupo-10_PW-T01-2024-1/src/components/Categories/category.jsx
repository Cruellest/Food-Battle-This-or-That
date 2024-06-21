import { useNavigate } from 'react-router-dom';

function Category({ category }) {
  const navigate = useNavigate();

  return (
    <div>        
      <div className="container-sm" id="category">
        <div className="container-sm" id="category-content">
          <div className="container-sm" id="food-small">
            <img className="rounded" id="img-small" src={category.strCategoryThumb} alt={category.strCategory} />
          </div>
          <div className="container-sm" id="login-form">
            <button 
              type="button" 
              className="btn btn-dark" 
              style={{ fontWeight: 'bolder', background: 'black', color: '#ffc107' }} 
              onClick={() => navigate(`/Play/${category.strCategory}`)}
            >
              {category.strCategory}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
