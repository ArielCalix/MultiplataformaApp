import type { Props } from "../../Api/typesProps";
import type { Type as TypeCharacter } from "../../Api/namespaces/characterType";
import { CardBody, CardTitle, CardSubtitle, CardText, Button, Card } from "reactstrap";

export const DEF = {};

export type PROP = TypeCharacter.CharacterType & {
};

export default function Component(props: Props<PROP, typeof DEF>) {
    return <Card
        style={{
            width: '18rem',
            margin: '0.5rem',
        }}
    >
        <img
            alt="Sample"
            src={props.image}
        />
        <CardBody>
            <CardTitle tag="h5">
                {props.name}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {props.species} - {props.status} - {props.gender}
            </CardSubtitle>
            <CardText>
                location: <span>{props.location.name}</span>
            </CardText>
            <CardText>origin: <span>{props.origin.name}</span></CardText>
            <CardText>type: <span>{props.type !== '' ? props.type : 'N/A'}</span></CardText>
        </CardBody>
    </Card>;
}

Component.defaultProps = DEF;
Component.displayName = "CharacterCard";