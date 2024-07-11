import { sum } from "./sum";
import { test, expect } from "vitest";

test("sum should sum", () => {
    expect(sum(10, 20)).toBe(30);
});
