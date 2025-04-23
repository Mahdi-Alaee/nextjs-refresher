function DashboardMenu() {
    const items = [
        {id:1,title: "محصولات"},
        {id:2,title: "سفارشات"},
    ];

    return ( 
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    
                </li>
            ))}
        </ul>
     );
}

export default DashboardMenu;