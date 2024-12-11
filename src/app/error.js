'use client';

export default function Error({ error, reset }) {
    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>{error?.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
