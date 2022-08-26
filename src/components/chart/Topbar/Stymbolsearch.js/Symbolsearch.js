import React from "react";

const Symbolsearch = () => {
  return (
    <>
      <label
        aria-level="Symbol"
        className="modal-button flex py-[5px] pl-2 pr-8 cursor-pointer hover:bg-lightGray justify-center items-center rounded-md tooltip tooltip-bottom"
        data-tip="Symbol search"
        for="my-modal"
      >
        <img
          src={`https://s3-symbol-logo.tradingview.com/indices/s-and-p-500.svg`}
          alt="crypto-name"
          className="rounded-full h-4"
        />
        <span className="text-primary font-semibold ml-1">ES1!</span>
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box relative">
          <div class="modal-action">
            <label
              for="my-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam necessitatibus quos veritatis. Facere
            architecto eum totam sunt veniam expedita aut fugiat vero? Dolores,
            voluptates distinctio, consequuntur corporis, dolorum quia maxime
            quos ratione alias nulla eum porro obcaecati! Suscipit cupiditate
            vitae nesciunt doloremque impedit labore animi beatae corrupti cum
            natus minima, eos dolores fuga incidunt, iure nulla fugiat voluptate
            dignissimos. Aliquid repellendus architecto fugiat excepturi
            repudiandae odio natus illo voluptates qui fuga reprehenderit
            doloribus porro sit reiciendis mollitia libero veniam, atque
            molestias, iste at hic quis assumenda? Nisi, ab cumque id quasi
            dolor similique aliquid quisquam a tempora corporis perferendis
            suscipit sint doloribus molestiae! Officia omnis numquam quia
            nesciunt ea, id officiis atque aperiam voluptatibus a voluptas
            dolores consectetur ut ab sapiente, adipisci distinctio delectus
            quas quod animi eligendi dolorem necessitatibus ex aspernatur?
            Praesentium amet, nulla repudiandae dolor voluptas dolores provident
            nam perferendis unde, eos iste. Quibusdam consequuntur reiciendis
            soluta fuga minus, ratione dolorum eum asperiores rerum incidunt
            voluptatem debitis nemo, sed, voluptate sapiente? Rerum dicta neque
            minus incidunt optio ad nemo minima maiores delectus, aliquid quos
            voluptas, sequi unde dolor iste qui veritatis a tempora itaque
            corporis magnam. Labore consequatur quasi vel! Veritatis, nihil
            accusamus. Quod unde debitis laborum! Expedita repellendus,
            voluptatum, fugiat nisi est maxime tempora iure illum minus eius
            earum, magnam mollitia at doloremque saepe culpa. Reiciendis cum
            dicta dolores quasi. Delectus temporibus ut dignissimos facere.
            Numquam obcaecati exercitationem quisquam molestiae ea sed, hic, ad
            explicabo in atque repudiandae? Assumenda quas voluptatibus quasi
            accusamus hic, est dignissimos ratione, maiores perferendis quam
            amet dolor odit expedita quidem consequuntur. Sit velit, ipsa
            expedita unde vitae iusto perferendis! Quis, vel possimus provident
            dolore pariatur quos! Reprehenderit ipsum, culpa deleniti temporibus
            et odit accusamus autem sint minus saepe est aspernatur quo ullam
            natus, non omnis amet, veritatis iste neque incidunt iure. Voluptate
            veritatis quam ipsa ut rem, a laborum labore reiciendis ex
            blanditiis ipsam praesentium doloremque eius illum odio possimus
            modi ipsum! Eligendi aliquid assumenda doloremque, delectus ex at
            excepturi earum amet laboriosam maxime aperiam pariatur recusandae
            laborum neque quos illum accusantium sequi provident esse vel
            dolores, officia, eaque doloribus. Molestiae nesciunt repellendus
            nam, voluptates, adipisci repudiandae ad iste omnis non incidunt
            accusamus eveniet dolore similique doloremque magni voluptas placeat
            quod rerum veritatis provident eos quas expedita. Eaque nam,
            quaerat, non libero quis dolorum corrupti placeat, totam quia
            mollitia hic odio ut ex ullam maiores dolorem minus aliquam nemo. At
            ea, exercitationem similique aliquid, facilis cum ut voluptatem
            labore maxime sequi tempore expedita accusantium nemo ratione! Eos
            vel commodi, dolores reiciendis tempora modi natus explicabo labore
            asperiores reprehenderit incidunt consequuntur voluptatem architecto
            magnam doloribus adipisci officiis dolore id laboriosam consectetur
            quis? Rem sit cum ut ducimus tempore perspiciatis odio? Voluptatibus
            beatae, eum quod ullam quos, ab quam iste consequatur laudantium
            aspernatur reprehenderit minima modi rerum necessitatibus esse
            laboriosam soluta vitae assumenda eius illum, libero veniam!
            Perferendis quidem, quibusdam assumenda suscipit rerum animi commodi
            consequatur non sunt alias veritatis culpa? Dolorum repudiandae
            numquam id libero aut optio voluptatibus ullam veritatis fugiat
            magni. Repudiandae.
          </p>
        </div>
      </div>
    </>
  );
};

export default Symbolsearch;
