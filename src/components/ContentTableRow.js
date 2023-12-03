function ContentTableRow( {propertyName, propertyValue} ) {
    return (
        <tr>
            <td>{propertyName}</td>
            <td>{propertyValue}</td>
        </tr>
    )
}

export default ContentTableRow;