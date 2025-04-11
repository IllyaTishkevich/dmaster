const Text = ({spell}) => {
    return <div>
        <p>
            <span>
                name:
            </span>
            {spell.name}
        </p>
        <p>
            <span>
                castingTime:
            </span>
            {spell.castingTime}
        </p>
        <p>
            <span>
                level:
            </span>
            {spell.level}
        </p>
        <p>
            <span>
                components:
            </span>
            {spell.components}
        </p>
        <p>
            <span>
                materials:
            </span>
            {spell.materials}
        </p>
        <p>
            <span>
                duration:
            </span>
            {spell.duration}
        </p>
        <p>
            <span>
                text:
            </span>
            {spell.text}
        </p>
    </div>
}

export default Text;