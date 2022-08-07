class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                <a class="nav-link" href="hungerscale-resource.html">Hunger Scale</a>
                <a class="nav-link" href="emotionalphysical.html">Emotional & Physical Hunger Differences</a>
            </nav>
        `;
    }
}

class HungerScale extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <table class="table table-bordered">
            <caption>Table and hunger scale info sourced from <a href='https://www.secondnature.io/au/guides/mind/habit-change/identify-emotional-eating#use_the_hunger_scale' target='_blank'>Second Nature</a></caption>
                <thead>
                    <tr class="table-light">
                        <th scope="col">Rating</th>
                        <th scope="col">Feeling</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-danger">
                        <th scope="row">1</th>
                        <td>Starving</td>
                        <td>You may feel weak, experience a headache, dizziness, and lack of concentration. Your body feels totally out of energy.</td>
                    </tr>
                    <tr class="table-warning">
                        <th scope="row">2</th>
                        <td>Uncomfortably hungry</td>
                        <td>You feel iritable and cranky, with little energy. You may also feel nauseous.</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">3</th>
                        <td>Very hungry</td>
                        <td>Your stomach feels empty, and the urge to eat is strong.</td>
                    </tr>
                    <tr class="table-info">
                        <th scope="row">4</th>
                        <td>A little hungry</td>
                        <td>You start to think about food. Your body is giving you the signal that you might want to eat.</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">5</th>
                        <td>Not full but not that hungry</td>
                        <td>Your body has had enough food to keep going and is physically and psychologically just starting to feel satisfied.</td>
                    </tr>
                    <tr class="table-success">
                        <th scope="row">6</th>
                        <td>Satisfied and light</td>
                        <td>You're fully satisfied and full.</td>
                    </tr>
                    <tr class="table-info">
                        <th scope="row">7</th>
                        <td>Comfortable but slightly too full</td>
                        <td>You're feeling past the point of satisfaction, yet you can still find room for a little more. Your body might say no, but your mind says yes, so you take a few more bites.</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">8</th>
                        <td>Very full</td>
                        <td>Your stomach is starting to really ache. You probably know you shouldn't have had more, but it tasted so good.</td>
                    </tr>
                    <tr class="table-warning">
                        <th scope="row">9</th>
                        <td>Too full</td>
                        <td>You now feel really uncomfortable, heavy, tired, and bloated.</td>
                    </tr>
                    <tr class="table-danger">
                        <th scope="row">10</th>
                        <td>Beyond full</td>
                        <td>You're physically miserable, don't want to or can't move, and fel like you never want to look at food again. Not a good point to reach!</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}

customElements.define('main-header', Header);
customElements.define('hunger-scale', HungerScale);
