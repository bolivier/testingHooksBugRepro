import { useReducer } from "react";
import { useFoo } from "./useFoo";
import { renderHook, act } from "@testing-library/react-hooks";

test("simple test", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFoo());

    await waitForNextUpdate();

    expect(result.current[0]).toEqual("hello world");
});
