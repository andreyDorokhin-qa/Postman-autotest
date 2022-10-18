//Autotest for https://partner.agentapp.ru/v1/insured_objects/drivers

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});


pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Артюхов")
});


pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.driving_experience_started).to.eql("2010-10-10");
});


//Autotest for https://partner.agentapp.ru/v1/insured_objects/owners/natural_persons

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});


pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("г Санкт-Петербург, г Ломоносов, ул Швейцарская, д 1 к 1, кв 1");
});


pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});


pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.credential[0].issue_point).to.eql("УФМС");
});

