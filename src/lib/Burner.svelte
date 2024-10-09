<script>
    export let state;
    export let diameter;
</script>

<svg width={diameter} height={diameter}>
    <defs>
        <radialGradient id="on">
            <stop offset="10%" stop-color="red" />
            <stop offset="95%" stop-color="gold" />
        </radialGradient>
        <radialGradient id="off">
            <stop offset="10%" stop-color="lightgray" />
            <stop offset="95%" stop-color="lightgray" />
        </radialGradient>
    </defs>

    <circle
        stroke="darkgray"
        stroke-width="10"
        cx={diameter / 2}
        cy={diameter / 2}
        r={diameter / 2 - 10}
        fill="url('#{state}')"
    />
</svg>

<style>
</style>
