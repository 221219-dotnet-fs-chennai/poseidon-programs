using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using Models;
using Moq;
using FluentAssertions;
using Physician_BussinessLogic;
using PhysicianAvailabilityService.Controllers;

namespace PhysicianAvailability_Testing_Controller
{
    public class Controller_Testing


    {

        private readonly IFixture fixture;
        private readonly Mock<ILogic> mlogic;
        private readonly PhysicianAvailabilityController pvc;

        public Controller_Testing()
        {
            fixture = new Fixture();
            mlogic = fixture.Freeze<Mock<ILogic>>();
            pvc = new PhysicianAvailabilityController(mlogic.Object);
        }

        [Fact]
        public void FindDoctorByEmailID()
        {
            var phrmock = fixture.Create<IEnumerable<Physicianavailability>>();
            var id = fixture.Create<string>();
            mlogic.Setup(x => x.FindDoctorByEmailID(id)).Returns(phrmock);
            //Act
            var result = pvc.FindDoctorByEmailID(id);

            //Assert

            result.Should().NotBeNull();

            result.Should().BeAssignableTo<OkObjectResult>();

            result.As<OkObjectResult>().Value
                .Should().NotBeNull()
                .And.BeOfType(phrmock.GetType());

            mlogic.Verify(x => x.FindDoctorByEmailID(id), Times.AtLeastOnce());


        }

        [Fact]
        public void FindDoctorByEmailID_BadRequest()
        {
            IEnumerable<Physicianavailability> phrmock= null;
            var id = fixture.Create<string>();
            mlogic.Setup(x => x.FindDoctorByEmailID(id)).Returns(phrmock);
            //Act
            var result = pvc.FindDoctorByEmailID(id);

            //Assert

            result.Should().NotBeNull();

            result.Should().BeAssignableTo<BadRequestObjectResult>();

        

            mlogic.Verify(x => x.FindDoctorByEmailID(id), Times.AtLeastOnce());

        }


        [Fact]

        public void GetPhysician()
        {

            var phrmock = fixture.Create<IEnumerable<Physicianavailability>>();
           // var id = fixture.Create<string>();
            mlogic.Setup(x => x.GetAll()).Returns(phrmock);
            //Act
            var result = pvc.Get();

            //Assert

            result.Should().NotBeNull();

            result.Should().BeAssignableTo<OkObjectResult>();

            result.As<OkObjectResult>().Value
                .Should().NotBeNull()
                .And.BeOfType(phrmock.GetType());

            mlogic.Verify(x => x.GetAll(), Times.AtLeastOnce());
        }
    }
}