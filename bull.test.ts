import { Worker } from "bullmq";

describe("BullMQ worker", () => {
  it("leaves handles open after awaiting close()", async () => {
    const worker = new Worker("queue-name", async (job) => {}, {
      connection: {
        maxRetriesPerRequest: null,
      },
    });
    await new Promise((res) => setTimeout(res, 100));

    await worker.close();
  });
});
