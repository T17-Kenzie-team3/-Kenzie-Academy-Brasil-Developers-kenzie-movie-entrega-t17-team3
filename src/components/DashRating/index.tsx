import { StarRating } from "../../fragments/StarRating"

export const DashRating = () => {
    return(
        <section>
            <h1>Avaliações</h1>
            <label htmlFor="user-rating">Sua Avaliação</label>
            <div>
                <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                 blanditiis praesentium voluptatum deleniti atque corrupti quos 
                 dolores et quas molestias excepturi sint occaecati cupiditate 
                 non provident.
                </p>
                <div>
                    <StarRating />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </section>
    )
}