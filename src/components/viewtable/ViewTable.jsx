function ViewTable({ data }) {
    return (
        <>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td>{data.zone}</td>
                        <td>{data.qcode}</td>
                        <td>{data.locator}</td>
                        <td>{data.quantity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ViewTable;
