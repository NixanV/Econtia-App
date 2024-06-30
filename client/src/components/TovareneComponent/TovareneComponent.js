export const TovareneComponent = ({
    numberOfLine,
    nameOfLine,
    numberOfPackets,
    driver,
    _id,
}) => {
    console.log(numberOfPackets);
    return(
        <div>
            <p>{numberOfLine}: {nameOfLine} <br/> Driver: {driver} Packets: {numberOfPackets} </p>
        </div>
    )
}