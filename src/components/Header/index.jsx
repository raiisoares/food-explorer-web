import { Container } from "./styles";

export function Header({ menu, icon: Icon, logo, button, ...rest }) {
    return (
        <Container {...rest}>
            {
                menu &&
                <div className="menu" >
                    <button>
                        {Icon && <Icon size={24} />}
                    </button>
                    <h1>Menu</h1>
                </div>
            }



        </Container>
    )
}