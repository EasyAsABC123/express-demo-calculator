<style>
    * { font-size:1.5rem; }
    body { padding:50px; }
</style>

<p>Hello, ${d.name}.</p>

<form action="/calculate">
    <p>
        <label>Who are you?</label><br />
        <input type="text" name="name" />
    </p>

    <p>
    <label>And now some math:</label><br />
    <input type="text" name="a" size=3 />
        +
    <input type="text" name="b" size=3 />
    </p>

    <button>Say hello and calculate</button>
</form>